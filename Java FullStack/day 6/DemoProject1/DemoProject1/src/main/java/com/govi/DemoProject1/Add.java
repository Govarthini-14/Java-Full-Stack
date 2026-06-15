package com.govi.DemoProject1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Add {
    @GetMapping("add/{num1}/{num2}")
    public String add(@PathVariable int num1, @PathVariable int num2) {
        int res = num1 + num2;
        return "Addition:" + res;
    }

    /*@GetMapping("add/{num1}/{num2}")
    public int add(@PathVariable int num1,@PathVariable int num2){
        return num1+num2 ;
    }*/
    @GetMapping("mul/{num1}/{num2}")
    public String mul(@PathVariable int num1, @PathVariable int num2) {
        int res = num1 * num2;
        return "Multipicatin of two num:" + res;
    }

    @GetMapping("sub/{num1}/{num2}")
    public String sub(@PathVariable int num1, @PathVariable int num2) {
        int res = num1 - num2;
        return "Subtraction of two num:" + res;
    }

    @GetMapping("div/{num1}/{num2}")
    public String div(@PathVariable int num1, @PathVariable int num2) {
        int res = num1 / num2;
        return "division of two num:" + res;
    }

    @GetMapping("sumoddeven/{num1}/{num2}")
    public String oddEven(@PathVariable int num1,@PathVariable int num2){
        int sum=num1+num2;
        if(sum%2==0){
            return "It is even";

        }
        return "It is odd";
    }
}