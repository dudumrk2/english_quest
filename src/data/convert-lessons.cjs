// Quick script to convert JSON to TypeScript
const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', '..', 'final_lessons_complete_v2.json');
const tsPath = path.join(__dirname, 'lessons.ts');

const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const lessons = jsonData.lessons;

let output = `import { Lesson } from '../types';\n\nexport const lessons: Lesson[] = `;
output += JSON.stringify(lessons, null, 2);
output += ';\n';

fs.writeFileSync(tsPath, output, 'utf8');
console.log('✅ Lessons converted successfully!');
