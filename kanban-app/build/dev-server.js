// Node.js의 require를 사용해 임포트
const bodyParser = require('body-parser')

// 'Express' 애플리케이션 인스턴스를 받는 함수를 익스포트
module.exports = app => {
    // HTTP 요청의 body 내용을 JSON으로 파싱하는 미들웨어 설치
    app.use(bodyParser.json())

    // TODO: 이 부분 뒤로 API구현을 추가
    // 사용자 정보
    const users = {
        'foo@domain.com': {
            password: '12345678',
            userId: 1,
            token: '1234567890abcdef'
        }
    }

    // 로그인 API 엔드 포인트는 '/auth/login'
    app.post('/auth/login', (req, res) => {
        const {
            email,
            password
        } = req.body
        const user = users[email]
        if (user) {
            if (user.password !== password) {
                console.log(1);
                res.status(401).json({ message: '로그인에 실패하였습니다.' })
            } else {
                console.log(2);
                res.json({ userId: user.userId, token: user.token })
            }
        } else {
            console.log(3);
            res.status(404).json({ message: '등록된 사용자가 아닙니다.' })
        }
    })
}