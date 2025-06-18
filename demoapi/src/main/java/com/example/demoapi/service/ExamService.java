package com.example.demoapi.service;

import com.example.demoapi.entity.Exam;
import com.example.demoapi.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamService {

    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }

    public Exam createExam(Exam exam) {
        return examRepository.save(exam);
    }

    public Optional<Exam> getExamById(int id) {
        return examRepository.findById(id);
    }

    public void deleteExamById(int id) {
        examRepository.deleteById(id);
    }

}
