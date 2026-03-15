// ① any
// 특정 변수의 타입을 확실히 모를 때 사용
// 어떤 타입이든 자유롭게 할당 가능하지만, 타입 검사를 완전히 포기하는 것과 같다
// → 최대한 사용하지 않는 것이 권장됨

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = { name: "이정환" };
anyVar = () => {};

anyVar.toUpperCase(); // 컴파일 에러 없음 (but 런타임 에러 발생 가능)
anyVar.toFixed(2); // 컴파일 에러 없음 (but 런타임 에러 발생 가능)

let num: number = 10;
num = anyVar; // any → number 할당 가능 (타입 안정성 보장 안됨)

// ② unknown
// any처럼 모든 타입을 할당받을 수 있지만, any와 달리 타입 안전성을 보장한다
// → 타입을 먼저 확인(좁히기)하지 않으면 사용 불가

let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = { name: "이정환" };

// num = unknownVar;        // ❌ 에러: unknown은 다른 타입 변수에 바로 할당 불가
// unknownVar.toUpperCase(); // ❌ 에러: 타입 확인 없이 메서드 호출 불가

// 타입 좁히기 (Type Narrowing)
// typeof로 타입을 확인한 후에만 해당 타입의 기능을 사용할 수 있다
if (typeof unknownVar === "string") {
  unknownVar.toUpperCase(); // ✅ string으로 확인 후 사용 가능
}

if (typeof unknownVar === "number") {
  unknownVar.toFixed(2); // ✅ number로 확인 후 사용 가능
}

if (typeof unknownVar === "boolean") {
  unknownVar.valueOf(); // ✅ boolean으로 확인 후 사용 가능
}
