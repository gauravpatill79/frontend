import { useEffect, useState } from "react";
import { Button } from "../components/Button"
import { ChessBoard } from "../components/ChessBoard"
import { useSocket } from "../hooks/useSocket"
import { Chess } from 'chess.js'
import { Popup } from "../components/Popup";
import { StartButton } from "../components/Startbutton";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export const Game =()=>{
    const socket = useSocket();
    const [chess ,setChess ] = useState(new Chess());
    const [board , setBoard] = useState(chess.board());
    const [started , setStarted] = useState(false);
    useEffect(() =>{
        if(!socket){
            return ;
        }
        socket.onmessage = (event) =>{
            const message = JSON.parse(event.data);
            switch (message.type){
                case INIT_GAME :
                    setBoard(chess.board());
                    setStarted(true);
                    break;
                case MOVE :
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log(move);
                    break;
                case GAME_OVER :
                    break;
            }
        }
    },[socket]);
    if(!socket) return <div className="text-white text-center size-10">Connnecting...Please wait</div>
    return <div className="justify-center flex ">
        <div className="pt-8 max-w-screen-lg w-full "> 
            <div className="grid grid-cols-6 gap-4 w-full">
            <div className="col-span-4 w-full flex justify-center mt-12"> 
                    <ChessBoard chess = {chess} setBoard ={setBoard} socket ={socket} board={board}/>
                </div>
                <div className="col-span-2 bg-stone-950 w-full flex justify-center mt-12">
                    <div className="pt-8">
                        {!started && <StartButton onClick={()=>{
                            socket.send(JSON.stringify({
                                type: INIT_GAME
                            }))
                        }}>Start the Game
                        </StartButton>}
                        {started && <Popup/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
}