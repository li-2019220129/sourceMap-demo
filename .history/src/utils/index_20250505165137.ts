import axios from 'axios'

const getSourceMap = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}

const findSourceMap = async (stackFrame: any) => {
  const sourceMap = await getSourceMap(stackFrame.fileName+'.map')

}
