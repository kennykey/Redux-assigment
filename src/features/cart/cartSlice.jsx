import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
}

const cartReducer = (state = initialState,action)=>{
  switch (action.type){
    case 'increase':{
      const tempCart = state.cartItems.map((item)=>{
        if(item.id === action.payload.id){
          return {...item,amount:item.amount+1};
        }
        return item;
      });
      return {...state,cartItems:tempCart};
    }
    case 'decrease':{
      const tempCart = state.cartItems.map((item)=>{
        if(item.id === action.payload.id){
          return {...item,amount:item.amount-1};
        }
        return item;
      });
      return {...state,cartItems:tempCart};
    }
    case 'getTotal':
      return {...state,
        total: state.cartItems.reduce((acc, item) => acc + item.price * item.amount, 0),
        }
    case 'remove':
      return {...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        }
    case 'clear':
      return{ ...state,
          cartItems:[],
          amount:0,
          total:0,
    }
    default:
      return state
  }
}

export const increase = (id)=>({
  type:'increase',
  payload:{id,amount:1}
})

export const decrease = (id)=>({
  type:'decrease',
  payload:{id,amount:1}
})

export const getTotal = () =>({
  type:'getTotal',
  payload: total
})

export const remove = () =>({
  type:'remove',
  payload:{id}
})

export const clear = () =>({
  type:'clear',
})

export default cartReducer;