package com.expense.tracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.expense.tracker.model.Expense;
import com.expense.tracker.repository.ExpenseRepository;

@Service
public class ExpenseService {
    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    public Expense saveExpense(Expense expense) {
        return repository.save(expense);
    }
}
