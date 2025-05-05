import axios from 'axios'
import sourceMap from 'source-map'
const getSourceMap = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}

const findSourceMap = async (stackFrame: any) => {
  const sourceData = await getSourceMap(stackFrame.fileName + '.map')

  const consumer = await new sourceMap.SourceMapConsumer(sourceData)
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.lineNumber,
    column: stackFrame.columnNumber,
  })
  const code = consumer.sourceContentFor(originalPosition.source)
  l
}
