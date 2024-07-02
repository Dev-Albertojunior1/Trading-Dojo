import React, { useState } from 'react';
import { Box, Heading, Text, Input, Textarea, Button, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com'; // Importa o emailjs-com para envio de email

// Inicializa o EmailJS com seu User ID
emailjs.init('oKBLjstJAP59fIaLb'); // Substitua pelo seu User ID do EmailJS

const Contact: React.FC = () => {
  const toast = useToast(); // Hook do Chakra UI para mensagens toast
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controle do envio

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_9hxd6do'; // Substitua pelo seu Service ID do EmailJS
    const templateID = 'template_jiaqf8e'; // Substitua pelo seu Template ID do EmailJS

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams);
      console.log('Email sent successfully!', response.status, response.text);
      toast({
        title: 'Message Sent',
        description: 'Your message has been sent successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: '', email: '', message: '' }); // Limpa o formulário após o envio
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box id="contact" py={8} px={4} maxW="600px" mx="auto" color="gray">
      <Heading as="h2" size="xl" mb={4}>
        Contact Us
      </Heading>
      <Text mb={4}>Get in touch with us for any queries or support.</Text>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            size="lg"
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            size="lg"
          />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            size="lg"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
