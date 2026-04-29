import sqlite3

def setup_database(db_name, schema_data):
    conn = sqlite3.connect(db_name)
    cur = conn.cursor()

    for table_name, info in schema_data.items():
        cols_query = ", ".join(info["columns"])
        cur.execute(f"CREATE TABLE IF NOT EXISTS {table_name} ({cols_query})")

        if info["data"]:
            placeholders = ", ".join(["?"] * len(info["data"][0]))
            cur.executemany(f"INSERT INTO {table_name} VALUES ({placeholders})", info["data"])

    conn.commit()
    conn.close()
    print(f"Database '{db_name}' initialized successfully.")

db_schema = {
        "student": {
            "columns": ["id INTEGER", "code TEXT", "name TEXT"],
            "data": [
                (1, '2016001', 'David beckam'),
                (2, '2016002', 'Alexis Sanchez'),
                (3, '2016003', 'Mesut Oziel'),
                (4, '2016004', 'Lionel Messi'),
                (5, '2016005', 'Andres Iniesta'),
                (6, '2016006', 'Hector Bellerin'),
                (7, '2016007', 'Sergio Aguero'),
                (8, '2016008', 'David Silva'),
                (9, '2016009', 'Andik Firmansyah'),
                (10, '2016010', 'Boaz Sallosa')
                ]
            },
        "class": {
            "columns": ["id INTEGER", "code TEXT", "name TEXT"],
            "data": [
                (1, 'MKU001', 'Kewarganegaraan'),
                (2, 'MKU002', 'Bahasa Inggris'),
                (3, 'MKU003', 'Bahasa Indonesia'),
                (4, 'MKU004', 'Konsep Premograman'),
                (5, 'MKU005', 'Sistem Basis Data'),
                (6, 'MKU006', 'Sistem Operasi'),
                (7, 'MKU007', 'Grafika Komputer'),
                (8, 'MKU008', 'Matematika Diskrit'),
                (9, 'MKU009', 'Astronomi Dasar'),
                (10, 'MKU010', 'Astronomi Komputasi')
                ]
            },
        "student_class": {
            "columns": ["id INTEGER", "semester INTEGER", "student_id INTEGER", "course_id INTEGER"],
            "data": [
                (1, 1, 1, 1),
                (2, 1, 1, 2),
                (3, 1, 1, 5),
                (4, 1, 1, 9),
                (5, 1, 1, 7),
                (6, 1, 2, 5),
                (7, 1, 2, 7),
                (8, 1, 2, 9),
                (9, 1, 3, 1),
                (10, 1, 3, 2),
                (11, 1, 4, 5),
                (12, 1, 4, 9),
                (13, 1, 5, 7),
                (14, 1, 5, 5),
                (15, 1, 5, 1),
                (16, 1, 5, 9),
                (17, 1, 8, 7),
                (18, 1, 8, 5),
                (19, 1, 8, 1)
                ]
            }
        }

if __name__ == "__main__":
    setup_database("mahasiswa.db", db_schema)
