import { AiTwotoneHome, AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Navhead, Logintext, Navtext } from "./styles"
import { useCookies } from "react-cookie";

function Navbar(props) {
    const navigate = useNavigate();

    const [cookies, setCookies, removeCookies] = useCookies("authorization");
    const token = cookies.authorization;

    const logoutHandler = () => {
        removeCookies("authorization")
        navigate('/login')
        window.location.reload()
    }

    return (
        <>
            <Navhead>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '4%' }}>
                    <AiTwotoneHome
                        style={{
                            fontSize: '30px'
                        }}
                        onClick={() => { navigate('/') }} />
                    <AiFillCaretLeft
                        onClick={() => { navigate(-1) }}
                        style={{ fontSize: '30px' }} />
                </div>
                <Navtext>{props.children}</Navtext>
                {
                    
                    !token ?
                    <Logintext onClick={() => { navigate('/login') }}>로그인</Logintext>:
                    <Logintext onClick={logoutHandler}>로그아웃</Logintext>
                }
            </Navhead>
        </>
    )
}

export default Navbar;