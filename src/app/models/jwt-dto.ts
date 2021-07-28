export class JwtDto {
    token : string;
    type : string;
    username: string;
    authorities : string[];
    id : string;
    success : BigInteger;
}
