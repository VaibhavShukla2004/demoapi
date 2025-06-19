package com.example.demoapi.controller;

import com.example.demoapi.entity.Exam;
import com.example.demoapi.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/exams")
public class ExamController {

    @Autowired
    private ExamService examService;

    @GetMapping
    public List<Exam> getAllExams() {
        return examService.getAllExams();
    }

    @PostMapping
    public Exam createExam(@RequestBody Exam exam) {
        return examService.createExam(exam);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Exam> updateExam(@PathVariable int id, @RequestBody Exam updatedExam) {
        return examService.getExamById(id)
                .map(existingExam -> {
                    updatedExam.setExamId(id);  // prevent ID change
                    Exam savedExam = examService.createExam(updatedExam);
                    return ResponseEntity.ok(savedExam);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExam(@PathVariable int id) {
        return examService.getExamById(id)
                .map(exam -> {
                    examService.deleteExamById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Exam> getExamById(@PathVariable int id) {
        Optional<Exam> exam = examService.getExamById(id);
        return exam.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}

