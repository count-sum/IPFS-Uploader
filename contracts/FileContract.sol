pragma solidity ^0.5.0;

/// Stores a FileContract on solidity, as an array of structs cannot easily be returned
/// the structs must be decomposed by the UI
/// simple FileContract contains ipfshash, filename, owner, tags and unix timestamp.
/// Since we can't use an bytes32 array in solidity, I decided to have tag numbers
/// corresponding to string names, almost like a dictionary look up.
contract FileContract {

   /// struct that contains unique link to image (via IPFS), serial Id, and timestamp
   struct File {
      uint256 id;
      string ipfshash;
      bytes32 filename;
      bytes32[5] tags;
      address owner;
      uint256 timestamp;
   }
   uint256 public constant maxAmountOfFiles = 1000;
   // Owner => files
   mapping(address => File[maxAmountOfFiles]) public files;
   // Owner => last files id
   mapping(address => uint256) public lastIds;
   // consider mapping hash to set of tags

   /// main event for smart contract, needed for drizzle to update list of files
   event fileAdded (uint256 fileid, string ipfshash, bytes32 _filename);
   event tagsAdded (bytes32[5] tags);

   /// Add a file to the list
   /// ipfshash an ipfshash returned after an image is finished uploaded
   /// _filename name of file as a bytes32 as filenames should be short
   /// tags array of bytes32 used for sorting/searching files (e,g. blockchain, school, textbook)
   /// updates mappings todos and lastIds
   function addFile(string memory ipfshash, bytes32 _filename, bytes32[5] memory tags) public {

      File memory myFile = File(lastIds[msg.sender], ipfshash, _filename, tags,  msg.sender, now);
      // explicitly store tags
      myFile.tags = tags;
      emit tagsAdded (myFile.tags);
      // store new file in mapping

      files[msg.sender][lastIds[msg.sender]] = myFile;
      // emit event, also need for drizzle
      emit fileAdded(lastIds[msg.sender],ipfshash,_filename);
      if(lastIds[msg.sender] >= maxAmountOfFiles) lastIds[msg.sender] = 0;
      else lastIds[msg.sender]++;
   }

   /// return the tags for a specific file
   /// owner --- address of person who uploaded the file
   /// _index --- the file desired, (first file uploaded, second , etc ...)
   function getFileTags(address owner, uint256 _index) external view returns (bytes32[5] memory) {
       return files[owner][_index].tags;
  }

}
