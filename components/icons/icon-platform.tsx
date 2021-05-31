/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type Props = { color: string; height?: number | string };

export default function PlatformLogo({ color, height = 20 }: Props) {
  return (
    <svg height={height} viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 3000 l0 -3000 3000 0 3000 0 0 3000 0 3000 -3000 0 -3000 0 0
        -3000z m2695 620 c164 -256 257 -455 308 -660 28 -114 110 -15 -1234 -1488
        l-49 -54 0 879 0 879 376 413 377 413 51 -98 c29 -55 105 -182 171 -284z
        m1254 -79 l331 -365 0 -875 0 -876 -34 35 c-19 19 -305 332 -635 695 l-600
        660 25 42 c13 23 35 85 48 137 52 202 141 385 332 677 49 75 105 168 124 207
        l35 70 22 -22 c12 -11 170 -185 352 -385z"
        fill={color}
      />
    </svg>
  );
}
