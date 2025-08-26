
from flask import Flask, request, render_template_string
import datetime

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def contact_form():
    if request.method == 'POST':
        name = request.form['name']
        phone_number = request.form['phone_number']
        month = int(request.form['month'])
        day = int(request.form['day'])
        year = int(request.form['year'])
        
        # Validate date
        try:
            date = datetime.date(year, month, day)
        except ValueError:
            return render_template_string('Invalid date', template_folder='templates')
        
        # Save data to database (replace with actual database operations)
        # print(f"Name: {name}, Phone: {phone_number}, Date: {date}")
        
        return render_template_string('Thank you for joining our community! We will contact you soon.', template_folder='templates')
    
    return render_template_string


from datetime import datetime

def parse_date(date_string):
    try:
        return datetime.strptime(date_string, '%Y-%m-%d')
    except ValueError:
        raise ValueError("Invalid date format. Please use YYYY-MM-DD.")

def main():
    date_input = input("Enter date (YYYY-MM-DD): ")
    try:
        parsed_date = parse_date(date_date)
        print(f"You entered: {parsed_date.strftime('%B %d, %Y')}")
    except ValueError as e:
        print(str(e))

if __name__ == "__main__":
    main()



import tkinter as tk

class Calendar:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Calendar")
        self.create_calendar()

    def create_calendar(self):
        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        for day in days:
            tk.Label(self.root, text=day).grid(row=0, column=list(days).index(day))

        for i in range(31):
            tk.Label(self.root, text=str(i+1)).grid(row=i//7 + 1, column=(i % 7) + 1)

        self.root.mainloop()

if __name__ == "__main__":
    Calendar()

from flask import Flask, render_template_string
import random

app = Flask(__name__)

@app.route('/')
def index():
    grid_data = [[random.randint(1, 31) for _ in range(6)] for _ in range(5)]
    return render_template_string("""
        <div id="grid">
            {% for row in grid_data %}
                {% for num in row %}
                    <div class="box" data-number="{{ num }}">
                        <span class="number">{{ num }}</span>
                    </div>
                {% endfor %}
            {% endfor %}
        </div>
    """, {'grid_data': grid_data})

if __name__ == '__main__':
    app.run(debug=True)
