'use strict'
glob = require('glob')
fileUtil = fetchFileList: (path, ext, cb) ->
  pattern = path + '/**/*.'
  if Array.isArray(ext)
    pattern += '+('
    ext.forEach (element, index) ->
      if index > 0
        pattern += '|'
      pattern += element
      return
    pattern += ')'
  else
    pattern += ext
  glob pattern, (err, matches) ->
    if err
      cb err, null, pattern
      return
    cb null, matches, pattern
    return
  return
module.exports = fileUtil
