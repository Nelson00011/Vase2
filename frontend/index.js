import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
try {
    const result = await fetch('info.txt')
    const text = await result.text()
    //COMMENTS: Limitations on inputs


} catch (err){
    console.log(err)
}

