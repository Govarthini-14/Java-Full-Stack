package com.govi.DemoProject1;


import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RetunHtml{
    @GetMapping("/myhtml")

        public String sayHello(){
            return "<h1 style='color:maroon;'>Student Info</h1>"+"<p> Myself Govarthini.Iam a student at Dr.N.G.P.Institution. </p> <img src='https://tinyurl.com/b893nsmy' height='100px' width='100px'>";
        }
        @GetMapping("/img")
        public String image(){
                return"<img src='pic.jpg' width='200px' height='200px'> <img src='pic2.jpg' width='200px' height='200px'>";
        }

        @GetMapping("/calc/{a}/{b}")
        public String calc(@PathVariable int a,@PathVariable int b) {
            StringBuilder sb = new StringBuilder();
            sb.append("add").append(a + b).append("\n");
            sb.append("sub").append(a - b).append("\n");
            sb.append("mul").append(a * b).append("\n");

            if (b != 0) {
                sb.append("quo").append(a / b).append("\n");
                sb.append("rem").append(a % b).append("\n");
            } else {
                sb.append("quo Division by zero not allowed|n");
                sb.append("rem Division by zero not allowed|n");
            }
            return "<pre>" +sb.toString()+" </pre>";


        }


}
