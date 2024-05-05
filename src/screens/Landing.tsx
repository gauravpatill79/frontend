import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";
import Header from "../components/header";

export const Landing =()=>{
    const navigate = useNavigate();
    return (
      <div className="">
        <Header title="Chess is the art of analysis." />
        <div className="flex justify-center">
          <div className="pt-8 max-w-screen-lg">
            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex justify-center ">
                <img src={"/chess-board.jpeg"} className="rounded-2xl drop-shadow-2xl" />
              </div>
              <div className="pt-16">
                <div className=" flex justify-center">
                  <div className="text-center text-4xl font-bold tracking-widest">
                    <span className="mt-2 text-4xl text-white">
                      Where Every MOVE
                    </span>
                    <br />
                    <span className="mt-2 text-4xl font-bold text-white">
                      Defines Your
                    </span>
                    <br />
                    <span className="mt-2 text-6xl text-white">LEGACY</span>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => {
                      navigate("/game");
                    }}
                  >
                    PLAY ONLINE{" "}
                  </Button>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => {
                      navigate("/bot");
                    }}
                  >
                    PLAY WITH BOT-Mandar{" "}
                  </Button>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => {
                      navigate("/room");
                    }}
                  >
                    PLAY 1 Vs 1{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}