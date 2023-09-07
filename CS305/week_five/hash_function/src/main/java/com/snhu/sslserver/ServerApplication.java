package com.snhu.sslserver;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.xml.bind.DatatypeConverter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

}

@RestController
class ServerController {
    // FIXME: Add hash function to return the checksum value for the data string
    // that should contain your name.
    @RequestMapping("/hash")
    public String myHash() throws NoSuchAlgorithmException {
        String data = "Brad Jackson";
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(data.getBytes());
        byte[] digest = md.digest();
        String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
        return "<p>data: Brad Jackson<p>Name of Cipher Algorithm Used: MD5<p>CheckSum Value:" + myHash;
    }
}
