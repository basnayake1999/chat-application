import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
    'b753af43-7c75-44cf-8b5b-63a6790cc2fe',
    props.user.username, 
    props.user.secret
    );
    return (
    <div style ={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
    )
  };
  
  export default ChatsPage;