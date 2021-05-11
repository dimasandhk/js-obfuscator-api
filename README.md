# Javascript Obfuscator API

### What is Obufuscation?

Code obfuscation is the technique of making the source code of an application difficult to read and comprehend so it becomes almost impossible for any unauthorized third-party group or individual, using any available tools, to reverse engineer it
<br>

### Main Endpoint & Query

Endpoint = <code>/api/obfuscate</code>
<br>
Query (Required) = <code>/api/obfuscate?code={YOUR_CODE}</code>
<br>

<hr>
Example = <code>/api/obfuscate?code=console.log("Hello World")</code>
<br>
Result =

```javascript
{
    "error": false,
    "status": 200,
    "codeQuery": "console.log(\"Hello World\")",
    "detail": {
        "compact": true,
        "config": "",
        "controlFlowFlattening": false,
        "controlFlowFlatteningThreshold": 0.75,
        "deadCodeInjection": false,
        "deadCodeInjectionThreshold": 0.4,
        "debugProtection": false,
        "debugProtectionInterval": false,
        "disableConsoleOutput": false,
        "domainLock": [],
        "exclude": [],
        "forceTransformStrings": [],
        "identifierNamesGenerator": "hexadecimal",
        "identifiersPrefix": "",
        "identifiersDictionary": [],
        "ignoreRequireImports": false,
        "inputFileName": "",
        "log": false,
        "numbersToExpressions": false,
        "optionsPreset": "default",
        "renameGlobals": false,
        "renameProperties": false,
        "renamePropertiesMode": "safe",
        "reservedNames": [],
        "reservedStrings": [],
        "rotateStringArray": true,
        "seed": 472934219,
        "selfDefending": false,
        "shuffleStringArray": true,
        "simplify": true,
        "sourceMap": false,
        "sourceMapBaseUrl": "",
        "sourceMapFileName": "",
        "sourceMapMode": "separate",
        "splitStrings": false,
        "splitStringsChunkLength": 10,
        "stringArray": true,
        "stringArrayEncoding": [
            "none"
        ],
        "stringArrayIndexesType": [
            "hexadecimal-number"
        ],
        "stringArrayIndexShift": true,
        "stringArrayWrappersChainedCalls": true,
        "stringArrayWrappersCount": 1,
        "stringArrayWrappersParametersMaxCount": 2,
        "stringArrayWrappersType": "variable",
        "stringArrayThreshold": 0.75,
        "target": "browser",
        "transformObjectKeys": false,
        "unicodeEscapeSequence": false
    },
    "result": "var _0xef05=['776192wCYaRn','207319qzoXnO','2966YUmwhF','123128ExGtHQ','267962hHlvlY','1xhEhmZ','215VvpMzx','10xGhpet','97385uCotkM','520770PMWQUi'];function _0x464c(_0x35eb32,_0x3fee14){_0x35eb32=_0x35eb32-0xdb;var _0xef0529=_0xef05[_0x35eb32];return _0xef0529;}(function(_0x3dcc9a,_0x403ada){var _0x1b4b2f=_0x464c;while(!![]){try{var _0x4e5121=-parseInt(_0x1b4b2f(0xde))+-parseInt(_0x1b4b2f(0xe0))+-parseInt(_0x1b4b2f(0xe1))*parseInt(_0x1b4b2f(0xdb))+parseInt(_0x1b4b2f(0xe4))*-parseInt(_0x1b4b2f(0xe3))+parseInt(_0x1b4b2f(0xdf))+parseInt(_0x1b4b2f(0xdd))+-parseInt(_0x1b4b2f(0xe2))*-parseInt(_0x1b4b2f(0xdc));if(_0x4e5121===_0x403ada)break;else _0x3dcc9a['push'](_0x3dcc9a['shift']());}catch(_0x506c09){_0x3dcc9a['push'](_0x3dcc9a['shift']());}}}(_0xef05,0x7304c),console['log']('Hello\\x20World'));"
}
```

### Website

- https://js-obfuscator.vercel.app/
