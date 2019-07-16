export default [
  {
    input: 'mw -location --current',
    return: '"Pittsburgh, PA"',
  },
  {
    input: 'mw -skills',
    return:
      '["C++", "JavaScript", "HTML", "CSS", "Stimulus", "Node.js", "git", "OpenCV"]',
  },
  {
    input: 'mw -skills --beginner',
    return:
      '["Python", "Ruby", "Django", "Ruby on Rails", "TensorFlow"]',
  },
  {
    input: 'mw -interests',
    return: '["testing", "fixing bugs", "augmented reality", "machine learning", "computer vision", "problem solving"]',
  },
  {
    input: 'mw -interests --misc',
    return: '["cooking", "jazz", "art", "herbalism", "botany", "gardening", "history"]',
  },
];
