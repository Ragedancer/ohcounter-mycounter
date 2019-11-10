import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './ActionPrompt.scss';
import App from '../App/App.js';
import {checkCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, newTemplate} from "../../utils/template";
import {clearScreen} from "../../utils/util";
import {observable} from "mobx";
class NewGameButton extends Component
{
    render() {
        return(
        <label for = "newButton"><input type = "radio" id = "newButton" name = "newButton"/></label>

         )
    }
}