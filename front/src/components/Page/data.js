export default {
  title: 'Les attributs alt',
  brief: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti laudantium repudiandae, rerum in nesciunt vero. Vero iure vitae laboriosam, sint ipsam rem ipsum quo reprehenderit eum hic, pariatur nisi fuga!',
  published: true,
  questions: [
    {
      brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim eveniet fugit expedita quam dolorem vitae aliquid pariatur dolor. Voluptates quas corrupti quo possimus ipsam ullam qui, earum sed quod!',
      code: '<img src="super-image.png" />',
      explanation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi, eaque velit corrupti reprehenderit obcaecati? Adipisci laborum illo expedita quaerat ullam repellat nulla provident neque, sint molestias quibusdam impedit velit.',
      picture: [
        {
          path: 'images/...',
        },
      ],
      possibleAnswers: [
        {
          content: 'alt="toto"',
          correct: false,
        },
        {
          content: 'alt="toto est très beau et il est aussi très grand. Par contre il est un peu bête."',
          correct: false,
        },
        {
          content: 'alt=""',
          correct: true,
        },
        {
          content: 'title="toto"',
          correct: false,
        },
      ],
    },
    {
      brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim eveniet fugit expedita quam dolorem vitae aliquid pariatur dolor. Voluptates quas corrupti quo possimus ipsam ullam qui, earum sed quod!',
      code: '<img src="gnagna.png" />',
      explanation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi, eaque velit corrupti reprehenderit obcaecati? Adipisci laborum illo expedita quaerat ullam repellat nulla provident neque, sint molestias quibusdam impedit velit.',
      picture: [
        {
          path: 'images/...',
        },
      ],
      possibleAnswers: [
        {
          content: 'alt="tata"',
          correct: false,
        },
        {
          content: 'alt="tata est très beau et il est aussi très grand. Par contre il est un peu bête."',
          correct: true,
        },
        {
          content: 'alt=""',
          correct: true,
        },
        {
          content: 'title="tata"',
          correct: false,
        },
      ],
    },
    {
      brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim eveniet fugit expedita quam dolorem vitae aliquid pariatur dolor. Voluptates quas corrupti quo possimus ipsam ullam qui, earum sed quod!',
      code: '<img src="gnigni.png" />',
      explanation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi, eaque velit corrupti reprehenderit obcaecati? Adipisci laborum illo expedita quaerat ullam repellat nulla provident neque, sint molestias quibusdam impedit velit.',
      picture: [
        {
          path: 'images/...',
        },
      ],
      possibleAnswers: [
        {
          content: 'alt="titi"',
          correct: false,
        },
        {
          content: 'alt="titi est très beau et il est aussi très grand. Par contre il est un peu bête."',
          correct: false,
        },
        {
          content: 'alt=""',
          correct: true,
        },
        {
          content: 'title="titi"',
          correct: false,
        },
      ],
    },
  ],
};
