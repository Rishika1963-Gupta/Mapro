import matplotlib.pyplot as plt

# Data
weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
sales = [150, 200, 250, 300]

# Create bar graph
plt.bar(weeks, sales, color='red')

# Add titles and labels
plt.title('Mapro Strawberry Fruit Crush Sales in December')
plt.xlabel('Weeks')
plt.ylabel('Sales (Units)')

# Show the graph
plt.show()
