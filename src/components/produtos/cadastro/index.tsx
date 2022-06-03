import { Produto } from 'app/models/produtos'
import { useProdutoService } from 'app/services'
import { Layout, Input, TextArea } from 'components'
import { NextPage } from 'next'
import { useCallback, useState } from 'react'

const CadastroProdutos: NextPage = () => {
    const service = useProdutoService();
    const [sku, setSku] = useState('')
    const [preco, setPreco] = useState(0)
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const onSubmit = useCallback(async () => {
        const produto: Produto = new Produto(
            sku,
            preco,
            nome,
            descricao
        )
        
        service.salvar(produto)

    }, [sku, preco, nome, descricao, service])

    return (
        <Layout title="Cadastro de Produtos">
            <div className='columns'>
                <Input
                    id="sku"
                    className='input' 
                    placeholder='Digite o SKU do produto'  
                    label="SKU: *" 
                    value={sku} 
                    onChange={setSku} 
                    columnClasses="is-half" 
                />
                <Input
                    id="preco"
                    className='input' 
                    placeholder='Digite o preço do produto'  
                    label="Preço: *" 
                    value={preco} 
                    onChange={setPreco} 
                    columnClasses="is-half" 
                />
            </div>
            <div className='columns'>
                <Input
                    id="nome"
                    className="input" 
                    placeholder='Digite o nome do produto'  
                    label="Nome do Produto: *" 
                    value={nome} 
                    onChange={setNome}
                    columnClasses="is-full"
                />
            </div>
            <div className='columns'>
                <TextArea
                    id="descricao"
                    className="textarea" 
                    placeholder='Digite a descrição do produto'  
                    label="Descrição do Produto: *" 
                    value={descricao} 
                    onChange={setDescricao}
                    columnClasses="is-full"
                />
            </div>
            <div className='field is-grouped'>
                <div className='control'>
                    <button onClick={onSubmit} className='button'>Salvar</button>
                </div>
                <div className='control'>
                    <button className='button'>Voltar</button>
                </div>
            </div>
        </Layout>
    )
}

export default CadastroProdutos