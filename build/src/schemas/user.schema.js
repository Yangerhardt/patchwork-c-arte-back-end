// export const createUserSchema = object({
//   body: object({
//     name: string({
//       required_error: "Name is required",
//     }),
//     email: string({
//       required_error: "Email address is required",
//     }).email("Invalid email address"),
//     password: string({
//       required_error: "Password is required",
//     })
//       .min(8, "Password must be more than 8 characters")
//       .max(32, "Password must be less than 32 characters"),
//     passwordConfirm: string({
//       required_error: "Please confirm your password",
//     }),
//     role: z.optional(z.nativeEnum(RoleEnumType)),
//   }).refine((data) => data.password === data.passwordConfirm, {
//     path: ["passwordConfirm"],
//     message: "Passwords do not match",
//   }),
// });
// export const loginUserSchema = object({
//   body: object({
//     email: string({
//       required_error: "Email address is required",
//     }).email("Invalid email address"),
//     password: string({
//       required_error: "Password is required",
//     }).min(8, "Invalid email or password"),
//   }),
// });
// export const verifyEmailSchema = object({
//   params: object({
//     verificationCode: string(),
//   }),
// });
// export type CreateUserInput = Omit<
//   TypeOf<typeof createUserSchema>["body"],
//   "passwordConfirm"
// >;
// export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
// export type VerifyEmailInput = TypeOf<typeof verifyEmailSchema>["params"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hcy91c2VyLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQiw0Q0FBNEM7QUFDNUMsVUFBVTtBQUNWLHNCQUFzQjtBQUN0QixxREFBcUQ7QUFDckQseUNBQXlDO0FBQ3pDLHlCQUF5QjtBQUN6QixnREFBZ0Q7QUFDaEQsU0FBUztBQUNULDJEQUEyRDtBQUMzRCw4REFBOEQ7QUFDOUQsZ0NBQWdDO0FBQ2hDLHdEQUF3RDtBQUN4RCxVQUFVO0FBQ1Ysb0RBQW9EO0FBQ3BELGtFQUFrRTtBQUNsRSxpQ0FBaUM7QUFDakMseUNBQXlDO0FBQ3pDLFFBQVE7QUFDUixNQUFNO0FBRU4sMENBQTBDO0FBQzFDLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIscURBQXFEO0FBQ3JELHlDQUF5QztBQUN6Qyx5QkFBeUI7QUFDekIsZ0RBQWdEO0FBQ2hELDhDQUE4QztBQUM5QyxRQUFRO0FBQ1IsTUFBTTtBQUVOLDRDQUE0QztBQUM1QyxxQkFBcUI7QUFDckIsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixNQUFNO0FBRU4sc0NBQXNDO0FBQ3RDLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsS0FBSztBQUVMLHVFQUF1RTtBQUN2RSw2RUFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY29uc3QgY3JlYXRlVXNlclNjaGVtYSA9IG9iamVjdCh7XHJcbi8vICAgYm9keTogb2JqZWN0KHtcclxuLy8gICAgIG5hbWU6IHN0cmluZyh7XHJcbi8vICAgICAgIHJlcXVpcmVkX2Vycm9yOiBcIk5hbWUgaXMgcmVxdWlyZWRcIixcclxuLy8gICAgIH0pLFxyXG4vLyAgICAgZW1haWw6IHN0cmluZyh7XHJcbi8vICAgICAgIHJlcXVpcmVkX2Vycm9yOiBcIkVtYWlsIGFkZHJlc3MgaXMgcmVxdWlyZWRcIixcclxuLy8gICAgIH0pLmVtYWlsKFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpLFxyXG4vLyAgICAgcGFzc3dvcmQ6IHN0cmluZyh7XHJcbi8vICAgICAgIHJlcXVpcmVkX2Vycm9yOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXHJcbi8vICAgICB9KVxyXG4vLyAgICAgICAubWluKDgsIFwiUGFzc3dvcmQgbXVzdCBiZSBtb3JlIHRoYW4gOCBjaGFyYWN0ZXJzXCIpXHJcbi8vICAgICAgIC5tYXgoMzIsIFwiUGFzc3dvcmQgbXVzdCBiZSBsZXNzIHRoYW4gMzIgY2hhcmFjdGVyc1wiKSxcclxuLy8gICAgIHBhc3N3b3JkQ29uZmlybTogc3RyaW5nKHtcclxuLy8gICAgICAgcmVxdWlyZWRfZXJyb3I6IFwiUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZFwiLFxyXG4vLyAgICAgfSksXHJcbi8vICAgICByb2xlOiB6Lm9wdGlvbmFsKHoubmF0aXZlRW51bShSb2xlRW51bVR5cGUpKSxcclxuLy8gICB9KS5yZWZpbmUoKGRhdGEpID0+IGRhdGEucGFzc3dvcmQgPT09IGRhdGEucGFzc3dvcmRDb25maXJtLCB7XHJcbi8vICAgICBwYXRoOiBbXCJwYXNzd29yZENvbmZpcm1cIl0sXHJcbi8vICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIixcclxuLy8gICB9KSxcclxuLy8gfSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyU2NoZW1hID0gb2JqZWN0KHtcclxuLy8gICBib2R5OiBvYmplY3Qoe1xyXG4vLyAgICAgZW1haWw6IHN0cmluZyh7XHJcbi8vICAgICAgIHJlcXVpcmVkX2Vycm9yOiBcIkVtYWlsIGFkZHJlc3MgaXMgcmVxdWlyZWRcIixcclxuLy8gICAgIH0pLmVtYWlsKFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpLFxyXG4vLyAgICAgcGFzc3dvcmQ6IHN0cmluZyh7XHJcbi8vICAgICAgIHJlcXVpcmVkX2Vycm9yOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXHJcbi8vICAgICB9KS5taW4oOCwgXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIpLFxyXG4vLyAgIH0pLFxyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCB2ZXJpZnlFbWFpbFNjaGVtYSA9IG9iamVjdCh7XHJcbi8vICAgcGFyYW1zOiBvYmplY3Qoe1xyXG4vLyAgICAgdmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nKCksXHJcbi8vICAgfSksXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IHR5cGUgQ3JlYXRlVXNlcklucHV0ID0gT21pdDxcclxuLy8gICBUeXBlT2Y8dHlwZW9mIGNyZWF0ZVVzZXJTY2hlbWE+W1wiYm9keVwiXSxcclxuLy8gICBcInBhc3N3b3JkQ29uZmlybVwiXHJcbi8vID47XHJcblxyXG4vLyBleHBvcnQgdHlwZSBMb2dpblVzZXJJbnB1dCA9IFR5cGVPZjx0eXBlb2YgbG9naW5Vc2VyU2NoZW1hPltcImJvZHlcIl07XHJcbi8vIGV4cG9ydCB0eXBlIFZlcmlmeUVtYWlsSW5wdXQgPSBUeXBlT2Y8dHlwZW9mIHZlcmlmeUVtYWlsU2NoZW1hPltcInBhcmFtc1wiXTtcclxuIl19