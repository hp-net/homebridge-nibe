
import { dest, parallel, series, src, watch } from 'gulp';
import * as ts from 'gulp-typescript';
import gulpif from 'gulp-if';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import yaml from 'gulp-yaml-validate';
import clean from 'gulp-clean';
import gulpESLintNew from 'gulp-eslint-new';

const tsProject = ts.createProject('tsconfig.json');
const destDir = 'dist/';
const isHtml = (file) => file.extname === '.html';
const isImage = (file) => file.extname === '.png';

const uiBuild = () => src('homebridge-ui/**')
    .pipe(gulpif(isHtml, htmlmin({ 
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true 
    })))
    .pipe(gulpif(isImage, imagemin()))
    .pipe(dest(`${destDir}homebridge-ui/`));

const yamlBuild = () => src('+(config|lang)/*.yaml')
    .pipe(yaml())
    .pipe(dest(`${destDir}`))

const typescriptBuild = () => src("src/**/*.ts")
    .pipe(tsProject())
    .pipe(dest(`${destDir}`));

const eslint = () => src(['src/**/*.ts'])
    .pipe(gulpESLintNew())
    .pipe(gulpESLintNew.format())
    .pipe(gulpESLintNew.failAfterError());

const eslintFix = () => src(['src/**/*.ts'])
    .pipe(gulpESLintNew({ fix: true }))
    .pipe(gulpESLintNew.fix());

const cleanAll = () => src(`${destDir}`)
    .pipe(clean());


exports.test = series(eslint);
exports.eslintFix = eslintFix;
exports.clean = cleanAll;
exports.default = parallel(yamlBuild, typescriptBuild, uiBuild);