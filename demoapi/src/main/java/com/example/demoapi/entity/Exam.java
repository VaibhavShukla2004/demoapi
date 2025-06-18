package com.example.demoapi.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Exam {

    @Id
    private int examId;

    private int acadYear;
    private String examType;
    private int semester;
    private String courseCode;
    private LocalDate dayOfExam;
    private int noOfRooms;
    private int noOfInvigilators;
    private int noOfStudents;
    private int noOfRelievers;
    private int noOfSquads;
    private int deptId;
    private LocalDate creationDate;
    private String createdBy;

    // Getters and Setters (or use Lombok if added)

    public int getExamId() { return examId; }
    public void setExamId(int examId) { this.examId = examId; }

    public int getAcadYear() { return acadYear; }
    public void setAcadYear(int acadYear) { this.acadYear = acadYear; }

    public String getExamType() { return examType; }
    public void setExamType(String examType) { this.examType = examType; }

    public int getSemester() { return semester; }
    public void setSemester(int semester) { this.semester = semester; }

    public String getCourseCode() { return courseCode; }
    public void setCourseCode(String courseCode) { this.courseCode = courseCode; }

    public LocalDate getDayOfExam() { return dayOfExam; }
    public void setDayOfExam(LocalDate dayOfExam) { this.dayOfExam = dayOfExam; }

    public int getNoOfRooms() { return noOfRooms; }
    public void setNoOfRooms(int noOfRooms) { this.noOfRooms = noOfRooms; }

    public int getNoOfInvigilators() { return noOfInvigilators; }
    public void setNoOfInvigilators(int noOfInvigilators) { this.noOfInvigilators = noOfInvigilators; }

    public int getNoOfStudents() { return noOfStudents; }
    public void setNoOfStudents(int noOfStudents) { this.noOfStudents = noOfStudents; }

    public int getNoOfRelievers() { return noOfRelievers; }
    public void setNoOfRelievers(int noOfRelievers) { this.noOfRelievers = noOfRelievers; }

    public int getNoOfSquads() { return noOfSquads; }
    public void setNoOfSquads(int noOfSquads) { this.noOfSquads = noOfSquads; }

    public int getDeptId() { return deptId; }
    public void setDeptId(int deptId) { this.deptId = deptId; }

    public LocalDate getCreationDate() { return creationDate; }
    public void setCreationDate(LocalDate creationDate) { this.creationDate = creationDate; }

    public String getCreatedBy() { return createdBy; }
    public void setCreatedBy(String createdBy) { this.createdBy = createdBy; }
}
