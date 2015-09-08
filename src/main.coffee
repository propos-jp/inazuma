'use strict'
# namespaceの設定
inazuma = inazuma or {}
# remote
inazuma.remote = require('remote')
# config
inazuma.config = inazuma.remote.require('config')
console.log inazuma.config.app.document_path
pattern = '\'' + inazuma.config.app.document_path + '\'/**/'
console.log pattern
