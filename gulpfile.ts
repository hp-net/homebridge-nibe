import {dest, parallel, series, src} from 'gulp';
import * as ts from 'gulp-typescript';
import gulpif from 'gulp-if';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del';
import gulpESLintNew from 'gulp-eslint-new';
import nodemon from 'gulp-nodemon';
import jest from 'gulp-jest';

const tsProject = ts.createProject('tsconfig.json', { rootDir: 'src/' });
const destDir = 'dist/';
const isHtml = (file) => file.extname === '.html';
const isImage = (file) => file.extname === '.png';

exports.uiBuild = () => src('homebridge-ui/**')
  .pipe(gulpif(isHtml, htmlmin({
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
  })))
  .pipe(gulpif(isImage, imagemin()))
  .pipe(dest(`${destDir}homebridge-ui/`));

exports.yamlBuild = () => src('+(config|lang)/*.yaml')
  .pipe(dest(`${destDir}`));

exports.typescriptBuild = () => src('src/**/*.ts')
  .pipe(tsProject())
  .pipe(dest(`${destDir}`));

exports.eslint = () => src(['src/**/*.ts', 'gulpfile.ts'])
  .pipe(gulpESLintNew())
  .pipe(gulpESLintNew.format())
  .pipe(gulpESLintNew.failAfterError());

exports.eslintFix = () => src(['src/**/*.ts', 'gulpfile.ts'])
  .pipe(gulpESLintNew({ fix: true }))
  .pipe(gulpESLintNew.fix());

exports.clean = () => del([`${destDir}`]);

exports.build = parallel(exports.yamlBuild, exports.typescriptBuild, exports.uiBuild);

exports.watch = (done) => nodemon({
  exec: 'homebridge -I -D',
  signal: 'SIGTERM',
  ext: 'ts html yaml',
  ignore: [`${destDir}**`],
  env: { 'NODE_OPTIONS': '--trace-warnings' },
  done: done,
  tasks: function (changedFiles) {
    const tasks = Array<string>();
    if (!changedFiles) {
      return tasks;
    }
    changedFiles.forEach(function (file) {
      const fileExt = file.split('.').pop();
      if (fileExt === 'ts' && !~tasks.indexOf('typescriptBuild')) {
        tasks.push('typescriptBuild');
      }
      if (fileExt === 'html' && !~tasks.indexOf('uiBuild')) {
        tasks.push('uiBuild');
      }
      if (fileExt === 'yaml' && !~tasks.indexOf('yamlBuild')) {
        tasks.push('yamlBuild');
      }
    });
    return tasks;
  },
});

exports.jest = () => {
  process.env.NODE_ENV = 'test';

  return src('tests/**/*.test.ts')
    .pipe(jest({
      preset: 'ts-jest',
      testEnvironment: 'node',
      transform: { '^.+\\.ts?$': 'ts-jest' },
      transformIgnorePatterns: ['<rootDir>/node_modules/'],
      collectCoverage: true,
      coverageReporters: ['json','html'],
    }));
};

exports.test = series(exports.eslint, exports.jest);
exports.default = exports.build;