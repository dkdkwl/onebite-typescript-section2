//any
//특정 변수의 타입을 확실히 모를때 사용한다.

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = { name: "이정환" };
anyVar = () => {};

anyVar.toUpperCase(); // 런타임 에러 발생 가능 (any는 타입 검사를 하지 않기 때문)
anyVar.toFixed(2); // 런타임 에러 발생 가능 (any는 타입 검사를 하지 않기 때문)

let num: number = 10;
num = anyVar; // any → number (가능하지만 타입 안정성 보장 안됨)

//unknown
//any와 달리 unknown은 타입 안전성을 보장한다.
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = { name: "이정환" };

num = unknownVar; // unknown → number (에러 발생, 타입 안전성 보장)

(unknownVar, toString()); // 에러 발생, unknown은 타입 검사를 하지 않기 때문

// 타입 좁히기 (type narrowing)
if (typeof unknownVar === "string") {
  unknownVar.toUpperCase(); // 정상 동작
}

// 다른 타입에 대한 처리
if (typeof unknownVar === "number") {
  unknownVar.toFixed(2); // 정상 동작
}

// 다른 타입에 대한 처리
if (typeof unknownVar === "boolean") {
  unknownVar.valueOf(); // 정상 동작
}
