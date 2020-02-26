import React, { useState, useCallback } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import ModifyUser from './ModifyUser';
// useRouter를 사용해서 id를 가지고 와서 그 정보를 보여준다!!

const UserInfo = ({ userInfo, isMe }) => {
    const [isChanging, setIsChanging] = useState(false);
    // useSelector로 정보를 가져온다. 나일 때랑 다른 사람일 때?..
    const onClickEdit = useCallback((e) => {
        setIsChanging(prev => !prev);
    }, []);
    return (
        isChanging
        ?   <ModifyUser userInfo={userInfo} onClickCancel={onClickEdit}/>
        :<UserInfoWrapper>
            <div className="userinfoTitle">
                회원정보
                {isMe && <button
                    onClick={onClickEdit}
                    className="userinfoEditBtn"
                    >
                    edit
                </button> }
            </div>
            <div className="userinfoWrapper">
                <div className="userinfoContent">
                    <div className="userinfoContentName">
                        <Icon className="icon" type="user"/> 닉네임
                    </div>
                    <div className="userinfoContentValue">{userInfo.nickName}</div>
                </div>
                <div className="userinfoContent">
                    <div className="userinfoContentName">
                        <Icon className="icon" type="form"/> 소개
                    </div>
                    <div className="userinfoContentValue">{userInfo.introduce}</div>
                </div>
                <div className="userinfoContent">
                    <div className="userinfoContentName">
                        <Icon className="icon" type="idcard"/> 아이디
                    </div>
                    <div className="userinfoContentValue">{userInfo.userId}</div>
                </div>
                <div className="userinfoContent">
                    <div className="userinfoContentName">
                        <Icon className="icon" type="mail"/> 이메일
                    </div>
                    <div className="userinfoContentValue">{userInfo.email}</div>
                </div>
                {isMe && <div className="userinfoContent">
                    <div className="userinfoContentName">
                        <Icon className="icon" type="mobile"/> 전화번호
                    </div>
                    <div className="userinfoContentValue">{userInfo.phoneNumber}</div>
                </div> }
                <div className="userinfoContent">
                    <div className="userinfoContentName">
                        <Icon className="icon" type="environment" /> 주소
                    </div>
                    <div className="userinfoContentValue">{userInfo.address}</div>
                </div>
            </div>
        </UserInfoWrapper>
    );
};

const UserInfoWrapper = styled.div`
    & .userinfoTitle{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 25px;
        border-bottom: 1px solid #BFC7CE;
        font-size: 40px;
        font-weight: bold;
        & .userinfoEditBtn{
            width: 80px;
            height: 27.5px;
            color: white;
            background: #FF4300;
            border: none;
            border-radius: 10px;
            font-size: 14px;
        }
    }
    & .userinfoWrapper{
        padding: 20px;
    }
    & .userinfoContent{
        font-size: 20px;
        display: flex;
        & .userinfoContentName{
            min-width: 120px;
            padding: 20px 0;
            border-right: 1px solid #F0F0F0;
            & .icon {
                color : #FF4300;
            }
        }
        & .userinfoContentValue{
            word-wrap: break-word;
            white-space: normal;
            min-width: 120px;
            padding: 20px;
            padding-right: 0;
        }
    }
`;

export default UserInfo;