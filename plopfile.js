module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Reactコンポーネントを作成します',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名は？',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: 'plop-templates/Component.scss.hbs',
      },
    ],
  });
};
