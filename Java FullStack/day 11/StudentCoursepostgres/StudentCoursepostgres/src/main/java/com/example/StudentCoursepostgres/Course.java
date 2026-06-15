package com.example.StudentCoursepostgres;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Course {
    @Id
    private long c_id;
    private long stu_id;
    private String c_name;
    public Course(){}
    public Course(long c_id,long stu_id,String c_name){
        this.c_id=c_id;
        this.stu_id=stu_id;
        this.c_name=c_name;
    }

    public long getC_id(){
        return c_id;
    }
    public long getId(){
        return stu_id;
    }
    public String getCname(){
        return c_name;
    }
    public void setC_id(long c_id){
        this.c_id=c_id;
    }
    public void setStu_id(long stu_id){
        this.stu_id=stu_id;
    }
    public void setCourse(String c_name){
        this.c_name=c_name;
    }

}
