package com.govi.DemoProject1;


import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class New {
    @GetMapping("/hi/{name}")
    public String myname(@PathVariable String name) {
        return "Hii " + name;
    }


    @GetMapping("/hello/{name}")
    public String name(@PathVariable String name) {
        String n = name.toLowerCase();
        if (n.equals("govarthini")) {
            return "Yes";
        }
        return "No";
    }


    @GetMapping("/weather/{temp}")
    public String weather(@PathVariable int temp) {
        if (temp < 0) {
            return "Shivering";
        } else if (temp >= 0 && temp < 15) {
            return "Chill";
        } else if (temp >= 15 && temp < 24) {
            return "Happy";
        } else if (temp >= 24 && temp < 30) {
            return "Towards hot";

        } else if (temp >= 30 && temp <= 32) {
            return "Hatter";

        } else {
            return "Oh My God😲";
        }

    }

    @GetMapping("/intro/{name}/{city}/{course}")
    public String intro(@PathVariable String name,@PathVariable String city,@PathVariable String course){
        return "Hello.....I am "+name+" from "+city+".Welcome to "+course;
    }


}


