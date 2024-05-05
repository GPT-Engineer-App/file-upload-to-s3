import React, { useState } from "react";
import { Container, VStack, Button, Input, Text, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Here you would typically handle the upload process to S3
    console.log("File to upload:", file.name);
    toast({
      title: "File Uploaded",
      description: `Your file ${file.name} would be uploaded to S3.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Upload File to S3</Text>
        <Input type="file" onChange={handleFileChange} placeholder="Select file" size="md" />
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload} isDisabled={!file}>
          Upload
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
