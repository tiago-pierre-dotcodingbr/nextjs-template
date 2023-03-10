import { useSelector } from 'react-redux';

// styles
import * as S from './styles';

// asssets
import logo from '../../assets/images/logo.svg';

// store
import { RootState } from '../../store';

export const Home = () => {
    const user = useSelector((state: RootState) => state.user.user);

    return (
        <S.Container>
            <S.Logo src={logo} alt="logo" />
            <S.TextContainer>
                <S.Title>{user}</S.Title>
                <S.Text>Template incial para novos projetos.</S.Text>
            </S.TextContainer>
        </S.Container>
    );
};
