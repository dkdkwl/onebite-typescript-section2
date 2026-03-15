// enum (열거형 타입)
// 여러 값에 각각 이름을 붙여 열거해두고 사용하는 타입
// 숫자 대신 의미 있는 이름으로 관리할 수 있어 가독성이 높아진다

// ① 숫자형 enum
// 값을 직접 지정하지 않으면 0부터 1씩 자동 증가
// 중간 값을 지정하면 그 이후부터 지정값 기준으로 1씩 증가
//   ex) ADMIN, USER, GUEST        → 0, 1, 2
//   ex) ADMIN = 10, USER, GUEST   → 10, 11, 12
//   ex) ADMIN, USER = 10, GUEST   → 0, 10, 11
//   ex) ADMIN = 10, USER = 20, GUEST → 10, 20, 21
enum Role {
  ADMIN, // 0 - 관리자
  USER, // 1 - 일반 사용자
  GUEST, // 2 - 게스트
}

// ② 문자형 enum
// 값을 직접 문자열로 지정 (자동 증가 없음, 명시적으로 모두 지정해야 함)
enum Language {
  korean = "ko",
  english = "en",
  japanese = "jp",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0
  language: Language.korean, // "ko"
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1
};
const user3 = {
  name: "김철수",
  role: Role.GUEST, // 2
};

console.log(user1, user2, user3);
