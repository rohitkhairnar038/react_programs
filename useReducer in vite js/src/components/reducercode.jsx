export const reducerMethod = (precounter,action)=>{
    switch(action.type){
        case "inr":
            return(precounter+action.newCounter)

            case "dcr":
                return(precounter-action.newCounter)

                case "zero":
                    return(0)
    }
}