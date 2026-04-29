# Student Database Management

## Project Description

This project provides tools for managing and querying a student database (`mahasiswa.db`). It includes scripts to set up the database and examples of common queries to retrieve student and class information.

## Installation Instructions

1.  Clone the repository.
2.  Ensure you have Python installed on your system.
3.  Navigate to the `assets` directory.
4.  Run the database setup script: `python setup_database_mahasiswa.py`

## Usage Examples Demo

The following example demonstrates how to query the student database to retrieve the IDs and names of students and their associated classes for a specific semester.

**Example 1: Fetching student and class information for Semester 1**

To execute this query, ensure the `mahasiswa.db` is set up and accessible. You can run this SQL query using a Python script or a SQL client.

```sql
SELECT s.id, s.name, c.name
FROM student_class sc
JOIN student s ON sc.student_id = s.id
JOIN class c ON sc.course_id = c.id
WHERE sc.semester = 1;
```

This query will return a list of student IDs, student names, and the names of the classes they are enrolled in for the first semester.