import { useState } from "react";
import { SelectBoxWrapper, Select } from "./styles";

// 깃터짐 테스트용 주석

const OPTIONS = [
    { id: 0, value: "", name: "" },
    { id: 1, value: "서울", name: "서울" },
    { id: 2, value: "경기", name: "경기" },
    { id: 3, value: "강원", name: "강원" },
    { id: 4, value: "충청", name: "충청" },
    { id: 5, value: "경상", name: "경상" },
    { id: 6, value: "전라", name: "전라" },
    { id: 7, value: "제주", name: "제주" },
];

const SelectBox = (props) => {
    return (
        <SelectBoxWrapper>
            <div style={{ fontWeight: '700', position: 'relative', width: '50px', marginLeft: '8%' }}><span style={{ position:'relative', left:'40%' }}>{props.children}&nbsp;</span>
                <Select value={props.value} onChange={props.onChange}>
                    {OPTIONS.map((option) => (
                        <option
                            key={option.id}
                            value={option.value}
                            defaultValue={props.defaultValue === option.value}
                        >
                            {option.name}
                        </option>
                    ))}
                </Select>
            </div>
        </SelectBoxWrapper>
    );
};
export default SelectBox