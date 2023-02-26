import gql from "graphql-tag"

export const CREATE_GOODS = gql`
    mutation CreateStoreGoods($input: GoodsInput){
        createGoods(input: $input){
            name
            image
            price
            count
        }
    }
`