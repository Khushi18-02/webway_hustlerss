// backend/database/seedSampleData.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const sampleData = require('./sampleData'); // Adjust path to your sampleData.js
require('dotenv').config();

const seedSampleData = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('🗑️  Cleared existing users');

    // Prepare all users (students + admins)
    const allUsers = [];

    // Process students
    for (const student of sampleData.students) {
      const hashedPassword = await bcrypt.hash(student.password, 10);
      allUsers.push({
        name: student.name,
        email: student.email.toLowerCase(),
        password: hashedPassword,
        role: 'student',
        isVerified: true,
        studentId: `STU${Date.now()}${Math.floor(Math.random() * 100)}`,
        
      });
    }

    // Process admins  
    for (const admin of sampleData.admins) {
      const hashedPassword = await bcrypt.hash(admin.password, 10);
      allUsers.push({
        name: admin.name,
        email: admin.email.toLowerCase(),
        password: hashedPassword,
        role: 'admin',
        isVerified: true,
        
      });
    }

    // Insert all users
    const createdUsers = await User.insertMany(allUsers);
    console.log(`✅ Created ${createdUsers.length} users successfully!`);

    // Display login credentials
    console.log('\n🔑 LOGIN CREDENTIALS:');
    console.log('\n👩‍🎓 STUDENTS:');
    sampleData.students.forEach(student => {
      console.log(`   ${student.email} / ${student.password}`);
    });

    console.log('\n👨‍💼 ADMINS:');
    sampleData.admins.forEach(admin => {
      console.log(`   ${admin.email} / ${admin.password}`);
    });

    console.log('\n🎯 Test with any of the above credentials!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding sample data:', error);
    process.exit(1);
  }
};

seedSampleData();