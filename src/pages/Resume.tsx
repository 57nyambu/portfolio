import AnimatedSection from '../components/AnimatedSection';
import { Download, Briefcase, Award, Code, Shield, Server, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// PDF embedded as base64 — no /public file needed
const RESUME_PDF_B64 = 'JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMgNSAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YxIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKMyAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYS1Cb2xkIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMiAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0NvbnRlbnRzIDEwIDAgUiAvTWVkaWFCb3ggWyAwIDAgNTk1LjI3NTYgODQxLjg4OTggXSAvUGFyZW50IDkgMCBSIC9SZXNvdXJjZXMgPDwKL0ZvbnQgMSAwIFIgL1Byb2NTZXQgWyAvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJIF0KPj4gL1JvdGF0ZSAwIC9UcmFucyA8PAoKPj4gCiAgL1R5cGUgL1BhZ2UKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EtT2JsaXF1ZSAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyAvTmFtZSAvRjMgL1N1YnR5cGUgL1R5cGUxIC9UeXBlIC9Gb250Cj4+CmVuZG9iago2IDAgb2JqCjw8Ci9Db250ZW50cyAxMSAwIFIgL01lZGlhQm94IFsgMCAwIDU5NS4yNzU2IDg0MS44ODk4IF0gL1BhcmVudCA5IDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9QYWdlTW9kZSAvVXNlTm9uZSAvUGFnZXMgOSAwIFIgL1R5cGUgL0NhdGFsb2cKPj4KZW5kb2JqCjggMCBvYmoKPDwKL0F1dGhvciAoXChhbm9ueW1vdXNcKSkgL0NyZWF0aW9uRGF0ZSAoRDoyMDI2MDIyNTE5MjIxMSswMCcwMCcpIC9DcmVhdG9yIChcKHVuc3BlY2lmaWVkXCkpIC9LZXl3b3JkcyAoKSAvTW9kRGF0ZSAoRDoyMDI2MDIyNTE5MjIxMSswMCcwMCcpIC9Qcm9kdWNlciAoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gXChvcGVuc291cmNlXCkpIAogIC9TdWJqZWN0IChcKHVuc3BlY2lmaWVkXCkpIC9UaXRsZSAoXChhbm9ueW1vdXNcKSkgL1RyYXBwZWQgL0ZhbHNlCj4+CmVuZG9iago5IDAgb2JqCjw8Ci9Db3VudCAyIC9LaWRzIFsgNCAwIFIgNiAwIFIgXSAvVHlwZSAvUGFnZXMKPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9GaWx0ZXIgWyAvQVNDSUk4NURlY29kZSAvRmxhdGVEZWNvZGUgXSAvTGVuZ3RoIDMwNTEKPj4Kc3RyZWFtCkdiIVNtZmxsKEEoNEZNMVM+UnEkMkNLSVVdWDxCM2c6OE9XTD4xdClRPHN1dV5rdCFnMjQwS1UrNWFdMTFtJ0tGRD4tRTxiNkZdKGxLZz1vSTB0VUtyIyMiLihEMihfZEpIUmglJFA5MjEyUDQ0ZmVuYiREdVAnWGt0XSEzZzgqc3JyLF9CaGQjQz5QZGNIcyNoWDFkbGMjZkt0b2tkKF5wQlErPTNBI10sVUNIaV0/Y1MubGdUdDE8MXJEMGtIZExQXXJIdVglQ2hKdWUzTmY2SzxtTiYjRGVsNGZdLmQvaSgtZCRIJG9WaS8/IiVwWyI9Q3JfSlxWdW4pbk1sNks+KjBXMVM7cykyZTJeXmtQPW5qKyNOdENycWs2ajQuOlNtZmwrQktDRVspOGZqZnJAW3FzX1E1b08sSk5vcCEjbmk9aHVrdU0oLFY9ZE82RzJTMF9rdSQlaFM9WFsqU1IhIj44Q08pUyVzNVcwSCdrW1g4Z0ZqLl0vK2Y6SDpLZSNQSlg2LEY7NkgsUUs7aT5qVFYwYEEqJTg1a00zW2YwUSxRZSEyRiZtX2U8YkU1V1EnVj9KY1V0SyFJJF4iIicsX1E9Nzw+Qm9ZZGRKTTo5NkxFTUY0Lz1JQjhxdEZbP0psKSclQlVBKzk2X11aWGxkUl9xXClabVtaT0hGJUBQNDhBaEpxKFVDVFE4KypsKU9iQ1RNanVvWDlwJE5TZE5ZMV0tbFVSRnIyKkk3I2c4XjRkKVJsaS1rLSxQckdJcj07bFc8aC9OVikjP3JZUzUhbT4vaz1DVGVdbTpLQ1JZNVcqaFY/aD1aUGkhTEM/T2spWnVWUSFzVDFcSGJvaHFNNWFETWFXQlkrPHI7XT4vIzNVY2VSWSNHZkxlNkNPdF8ocWRNZllfcEZRJEVEQSFXX05yS0szbHVEVEEoK2VKZz8/VSFnIkpJTCtAMyR1JV9JUzpbYCstUU8tWEZDM1JhNmhtPGFqcGsqMyNIQmZJMEpSQWBecTw8TFBIPzpIV3FqNXRtSjpJXDRQIV0oajspQV5bOixkPClmRjY5OmBEQVNSXT1jRmREVzsvTUZLbVJ1LUosWywuNk1FPCdGVitIdE1JYTtGcypoX0BHJDFKRjJWYVslQlsvaUo3ZnBsVWcwWSw0RDk4MyVJWjQmazwnNis3XDZTLFtncShlNDtqQFczKyhCbHQ9OilaalRqSDhLXjQ6JFJlLEIhNCMoZCxbMy46MVtpaklKMlIrNzA9RWxfXjNKKXAxJ0FjRChnJmkvdVkmOkNLMDsoO0wxWUJqUm1gST1YTmRbYDhCRk00SEhpR1xTR21sST1NI150ZClncy8oJHEybigiTWhNYGhXZyQmJXNDLEEpaTRNdSQmbVliLyxtQyQ1Ty9oXF8rJUhBbCYtJmpoYCVGW0FWVjAtQDtGXyohREhtblQiJ0pHKissQD9xWXMyPkAsSl5nO2dkZU40W3AiXDktV1o6W10kXSRFNihAY08xNSc2ISQnU3A1OFJ1aDRWPlNeUzhQMXAwN2wwR0U8P2hvKTwhKGBeSzI7VWAmbU1URVRrQmNGIS5eNjJcTTJYWDRnV09oOEcqRUtdMkNndWFkVTRCWEs1JnBjNjVpVXMqVGIjImBlZ1dub0heJDFkKW8yNltGWyRBbWwxa19cJWM4aTwtIlolOGEvO047NW1qWlEoLTxRcEhxZV0wQiVjWiskcGlOMGE+dUAhVFg6aURgbDw1NThGUWVHM0NecHEwUmxcKDMvN1kuNHUlNGhARDkub01IKEFuJ0gxZyhaMTlEbjxuYTlXMSpFYW40QWVLLHNULG9iSUQ1S0FHSiJCZGtCO24pSzRbRXJXRzclYHVyKy1UckhRXy1JRS83SlE+USpvNUVFYjFccEMpWit0Nj9iOTxeKEtnM048aSMqKmRKUilUWERRXWlxQUVwYT9kWzRZYj49cDFxQG09KTZrXjdkVklYIWs/Yyw5VzpiPWdtYEtQLkMuUG1OWT04S1YqXGY1LShfb0RAbzhBOXVNKWEoJmpJWU0yYDtRN25DWFVAWm1IOCpvOylFLiMsMm5fMUpZbzpTMiowYSUnSS8yYEhUVHR0dXBVIWA4JyF1RjNnXmhYbC1aUF9wTl1bWElZNl1scG4rRHUpbTE7SCNJYDVrbixMTDM7b2ZoNydbcltLc1NvV1FDI3AnUiRLM19vSVltQ11HdVtlNyguSU0xVF1iLF1pL0RFamdBcWNaQVVgR1xzXUFcOClZQ10rJ0RiUG1OLDEyS1xScElVQTBUKmN1ODtiJyM8ajddTGRZbFxYPDxhOVUpOCtYX1FBIlhebDhtTi1UZiMrLixGQkpAc2otYUVlU2csLnROJEhLK2Y+LmVzWUVYPmhPJlhBdTAmOyJVLWw2Vl5JbHM8OlE+OF4jQlxHQyRoJjEqPz5yKy87Z0xncEtQU2olQiQpNSUmXUhZOGE8PSo4O0pdV2YiLlM0XDlfSSpvXF02T3MtNj49SVhvQDJROyFebUlSY1taO0dJMGE/NU5hXT4xbTokRElUU145YDtQN1sxJGpMbDglI0teQiU3aSZeJ1wtX2osT15HRi5abmNqb0U7P1s7YD9jXT1yMVZRNHBBXTRdUjVOajhcPj1wTG8nIXRFVWZhYkhFWjwoNnVrSDExcyw4Q3BfaWdGRGhnKi9LanNcVCc4OiE4Y1JHbUtxXk08IUI+c1UhXis1IUNCYFIkIydkY2lpKiRbZE1LYEZKXyNhKCUhbm5hdC1zJFpvP28pXVwqPDlYQjtYMls9cnJLQGpxSiFJZyduOUNaXzx1TlZjIk0wTDhRM15vOWM1QilnQTA2amc7Nj1Sc1FYYkF0XU5SZGlWXS9JJmpuK1ciLV9ONCJmJjljZGxsNDdxLWlOO2JbLU5QMi0wYFAuXytwRzdcJmgoZSZrdThxW0hiQikybGhyUE5TLDhgLGdmaiImPzdVWzhBPGFpQj0wOmNdPF9mPjFSVShgMV9FYDpwQzc+ZWlyUFU4QkZrIUpAcTMsXF4nNFVMV1pwUHU8PXNtRWtVKUgwbnQuWTgtKUdeIilHZTc6aWAmVDBpYW5QbT1CcXEmYWA+UkFfOmlWODE6VmJkSUdkcyVCP2pAMTZVX0EiJlo0UztMKV9oK19DPEppXipsYm1CYmReR15IZV5eUHQ+O0ZaaW1KaC00ZGB0N0BgMlsnPT1UN09JPDliWVkkVnVCJVQwJVBgL0hcI20qUFlxRkoxLTVyIzE7SjE1X1NHXzdPUiduIl1vNSgvdDYuaEtUWDBBVVhVOnUtTy9USSFHQnE7VmltLmFtWlUkTTsuUVRMMXRrJShxYFIudWtUVUhuTElJLE1eR0FvQCRYLFh0YjBUVFcnKGNDRUk9TiNKUWFwV19vSFVDO3Iia15rS1MmMURQJW8sPk05NzYuKi5QO1s1QT5zLDkhRkZmYTk4KWEyRyNsXzAnUCJcW3JeajQnVUg+Jl11Zk4xUmJxNjJiaShkZSdITmAkL2ZsYS9TUV9BO2NUOjY8IT9FcWFEbzRjV18idWBPZ2sqRyM2M2MpLjVcdDQuXyhNcjFQQmxaTHRUYypmTyM8KCFSdFs8KCJjayxjIWFWXyIsXU8yJyo9SVhsKy8qb1cxdVNmbDE4Pi86aD1zMSlOZ3NaWlFSaldodVsmL09ZPVtbYicwWGk7PnRNMyQ2ZUdsLjJAaExmW1BsSU5OSXFoS0EkKFpnZm9BQmQ/ZGwtKkRvMSE9OWhTQGVCR0QmdW1SY2tWSVVaPD5qKj8jUFRiQF0hVVEqSUInSlNZNSxyQD4iZCdpKCVCIXQsIyI0SjNFKF5iLkpKRlpyOWJ1bTNLcEs6QjVWLmImOTxwLzslUUNCUmtFVipqZFFVUHBoRUowSUdAWDBDVyNDJGBBYEpWYDxlLkY+TSlrW0UmYmZpYjVpUlgvJGlLLiIjb0JcPCkrbnVoJVQmUiE+TGZ1cVhZJSQrbyJxMjdZKE1dO0pSOWJUKEViJSIpSSckQisrSjZUQnBLZypNJSc/bS9zN1lvXUFCWEVWSCt+PmVuZHN0cmVhbQplbmRvYmoKMTEgMCBvYmoKPDwKL0ZpbHRlciBbIC9BU0NJSTg1RGVjb2RlIC9GbGF0ZURlY29kZSBdIC9MZW5ndGggMjIyNwo+PgpzdHJlYW0KR2F1MEQ+QmVkXCY6VnMvUiY/T18kU0svJVpZcE9LOGwnPUQzdEZKJTA+XEt0YGcwazQtRGJAKXIvUDwvYWdTUU84czBrUyhnMz0naypyQ1w0b0RfNEI5RUBFTHVKPCMlQ1FCLyosTnNsK01OQHRJLkhzS2xNNGxQR1tVNEBwXzJTLmQnRXQqT0dhY2k/TT1dPWpUTCNTNkkzKldFIklWczBSbjpVJT0zWjJMRy01KWhbPTgpbShpLylfPHNiZHMpN2dmYTRaR1tJVU1nZ1wqbFFuSEMhJU8hWWVSK0YqTFZfXzs4cWc+IUJtOGQ0KlNTRi8uRm1TOjJaMDVwViJTUCVBViQzISJzbjdfKyppLkRGLnNfOCNLOT89R0BHby80WCZRJ0tlSj5EVSRaciheYm1jTi0/MS1cRCZfXyIxRj1JS05zOGZSRWwjSyVmdTNyJFxSXDcocCdeITYyQlYkVmpWQzRHP3FXMSdNRGErVkIhXjsyKTVTPWs1Lz44S09QR0xtZV4+IitDNiRVdC4lZDc2QSMuNzQkdCVRak47NWY8UExEQE1yKydRRk1VMyJqTSUwYHVMaiYtWDpMRjR0V2E9WiVTRUQkT2toLDkvLGphJCxLLHIuNzQ0ZDpWMDVAbkgpKio5O14nQFEpI0ZmOT5RbUJial9wIjZudU1uOWFXPnQuYWU4YDhySEJFWz8+RCFZaF9IKlNoU0A6UDFGL2lKKicicFYqMyRwMzFYQkhoJSQ0VHAyMVQlaCtsbDtOJVY6JWBbc1VCS2lZRjFkWUM9dG9CRjMhblV0NFUrJk8tQWUvNyk3MmRWYyUoWVxYQEZSYnQzVS1uaFBfbmw/T2EiYyxAQDFuYSxUWCM5JUFCNyk3VjRdOCotKGwsLj1YJDlganBIayNkPE1sMFY6KiQjWCVZN0RvVWExOUJaY1JWTDQ2TnIpaWhCTkBtQklDWU1uLVxhTjBNWGo7XCo3PTxuRkA/L04mViguSDRVX25abmI7SlVIYEAvTHJUUFRSZF9VLzJhS15URUtiLlM4Y0RRQEtbN0pPL2BENzJQMD4xMiNEL2RtZDo5J2w1bmxrVkRAJWtWOmEvUUdzNGlMK0klOjhaKCZaLitiO2kzRS9GPidaSSI7LkxfZWtNbm9hMTtIOHNoLDtyI0U+XT9Rbk5eUmE2bm05Ll8mXkJIRGMrNG9jXCJwa0BQJTdSbSU8N191Uz4jLWw+OlojNCg3MHRVWUA1X14qQCNATVtgbVI2XWhvaVVDSU0yIU01Lk9SRSpmWVUnN2NQNCgvNkQuVU5lUEtTKG03KUdTZGJKckNQUiRIQy1HO18xPi1cZ1NtKWs7NUxfUFlHMTdiLydvVjRYWmNQJlY/V1ItRFIhPyVoZzJIbSJ0aiMsST8lWCFSPTJRJF4/c2RTSjJsImwtV3JjJTlSPkNSQEluPjBeNj4nTDloZEwzK3I8bEQiVXBiPVFxI11jb1FsTnJCNkhhaDY8ZUVMJWdMJ0JHSj8qdTUvckJEV29xNDNYKkFgJ1pcLy47V1Q+ciQpZ0ZoWGo3YSk5IiMlSDhiYEVFWSxrQEpKS0g7NiInX2YnTEA2SF9rRFpmSSklVk9UJVU1NG8wSC8tKiwtMFtbOik4MnI4cShna3BaMiNgdUZZTDk6SG5oUHIwc2FYRjtyIi9YYGEzVVhONmExVVFQZitMTks0VVQ6J0BFZC1VPF9Cb191TUstcCowJDFTcjI5UXBvVnJiXytHNFI/M0JPRTRxWCw/RFJyTUQ4OjtdQHRIZXRmX0c2V0RYJGFfaSw1a2A2PEwuK2BcRCg1PDdTdD5NTz5HazhAQl9hXGlVXiI8TE9dKDM/IV0rO1hvQHQtIkFJc05YIS1yVzNEPk9uMV9DaFMiM1VcUnAjP3IiIl84RWBhOGA/RTd1bl4sRiZQL2hOJyNtYkdtXidEZSFuRkwjRmVnT2lENFInWm1LazhwREFoOCg3NC0wYmdeXj4pWUBRSFw4KD9ebE9qRypgOjVDLENMZWpRbEUuXkhMZ15JaU0pKCpXTnBaQzhOSEpcWnNJaCFlQWw7Lk8qJWZ1NzUrXzJnOWBBRSthMGYtK0p0UjA3PDdISlEqIVVFS3VfR2ZGOzwyOUskWSJoOWhGNTlGLk5wNmA4bj9ePWpqXCI5VFhLc2MoMHRwJTwmKmFcPj8kbjMxMFUlOWlTPG9FV2MrPj8iNlsuZyw8b0FJbFIwY0Y1QVNnaGkzQlxvX0pwTzVeWVlgPzs3V0tnQmNgTWxFbkJLcEtLWF4yZWtTJmxvJEg/QCc/RiY1UzJXWEYhI14oUFZCKl4zNEBVQFkmLidgNWBFWkAoUlxDLD5Oaz4ocWcvNyM3NGViJDB1O2UlZWJ0QmJqYzIuUWZqZFAtJ2BDWk87dHMlQ2AzMyZnb2QkPExYci1TJi1mNTdWLTpZZkJxQUYmOzJiXSVHKm8jcD5fPlcrKDklYSpFJmpLYU1nSU0tMk9FWWZIVGwvKF9kKzMlYSMscj5oP0M5Q0QjIkUzWktCNmlWTChxQj1jbExhRGNZcFpoLEpoWV1KKnRbMTZPNENlZzgkKys1WzprbjluVytFOShSMDE1KVVubkIlVF9IJGFJSltXRFM0PW1BY250M2tLMk9Ha2A0Z2g7RXVMXjBuVk0jKkc9PlBWPmRQYGBdOytMOVFBOnJGPTcrJ0xtc1pNbCFINEY4Z2JLaWBWXVY6WUEwZFxzbF0pPExaaHJHcDtQNFdHM0FvclNPPTdwTzlIYSluYklDX0tDPmtwVSxCMVppZSE1UzhMQFJyXD5lVWRRLGxJZ15HbDxRczM4Xz81ODllVWdHV1UuXT87I2wrUE9WbDhzTWVqTF8tImo1IT08PUc5QFAvWFsoaT8nPS0jLSIndE9sRk5YVnA2UXUobEpcS20wIlFlaTVCaD46MkNXY3E6UiNVcSM6S05QR2BTclB+PmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDEyCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDA2MSAwMDAwMCBuIAowMDAwMDAwMTEyIDAwMDAwIG4gCjAwMDAwMDAyMTkgMDAwMDAgbiAKMDAwMDAwMDMzMSAwMDAwMCBuIAowMDAwMDAwNTM1IDAwMDAwIG4gCjAwMDAwMDA2NTAgMDAwMDAgbiAKMDAwMDAwMDg1NCAwMDAwMCBuIAowMDAwMDAwOTIyIDAwMDAwIG4gCjAwMDAwMDEyMDIgMDAwMDAgbiAKMDAwMDAwMTI2NyAwMDAwMCBuIAowMDAwMDA0NDEwIDAwMDAwIG4gCnRyYWlsZXIKPDwKL0lEIApbPDZmNDk1YzAzYWI5NzZkNzdmM2Q3ODQ2ZmU1NjM0NDI2Pjw2ZjQ5NWMwM2FiOTc2ZDc3ZjNkNzg0NmZlNTYzNDQyNj5dCiUgUmVwb3J0TGFiIGdlbmVyYXRlZCBQREYgZG9jdW1lbnQgLS0gZGlnZXN0IChvcGVuc291cmNlKQoKL0luZm8gOCAwIFIKL1Jvb3QgNyAwIFIKL1NpemUgMTIKPj4Kc3RhcnR4cmVmCjY3MjkKJSVFT0YK';

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = `data:application/pdf;base64,${RESUME_PDF_B64}`;
  link.download = 'Tom_Nyambu_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Resume = () => {
  const competencies = [
    { title: 'Backend Engineering',   items: 'Django, Django REST Framework, FastAPI, Flask, Python, RESTful APIs, JWT, WebSockets' },
    { title: 'Frontend Development',  items: 'React, TypeScript, Tailwind CSS, Framer Motion, Responsive Design' },
    { title: 'Cloud & DevOps',        items: 'Azure (IaaS), DigitalOcean, Docker, Nginx, Gunicorn, systemd, Linux, CI/CD' },
    { title: 'Storage & Data',        items: 'PostgreSQL, MySQL, SQLite, MinIO (S3-compatible), Query Optimization, Data Modeling' },
    { title: 'Fintech & Compliance',  items: 'ISO 20022 Messaging, Tazama (AML/CFT), M-Pesa, Payment Gateways, KRA Integration' },
    { title: 'Platform Engineering',  items: 'Multi-tenant SaaS, eCommerce, Email Automation, Analytics, Business Registration Systems' },
  ];

  const experiences = [
    {
      title:  'Internship - Junior Backend Developer',
      company: 'Lipana — Developer Payment Platform',
      period: 'OCT 2025 – Feb 2025',
      link:   'https://lipana.dev',
      items: [
        'Developed backend infrastructure for a real-time payment processing platform supporting developer-facing APIs',
        'Integrated Tazama, an open-source AML/CFT fraud detection system, into the core payment workflow',
        'Implemented transaction pipelines aligned with ISO 20022 international financial messaging standards',
        'Configured and deployed MinIO (S3-compatible) object storage for secure and scalable asset management',
        'Collaborated with cross-functional teams to ensure reliability, compliance, and data integrity',
      ],
    },
    {
      title:  'Full Stack Developer',
      company: 'Dima Platform — Multi-Tenant eCommerce',
      period: '2025 – Present',
      link:   'https://dima.co.ke',
      items: [
        'Designed and built a multi-tenant eCommerce and business management platform from the ground up',
        'Integrated M-Pesa payments, SMS & email pipelines, and real-time analytics as core platform components',
        'Built secure REST APIs for products, orders, user management, and tenant isolation with role-based access control',
        'Self-hosted MinIO for object storage and Umami for privacy-focused analytics across all live projects',
        'Manages full deployment lifecycle on Microsoft Azure IaaS including Docker, Nginx, and monitoring',
      ],
    },
    {
      title:  'Full Stack Developer',
      company: 'Jangara Mall — Client Project',
      period: '2025',
      link:   'https://jangara.tomnyambu.dev',
      items: [
        'Architected and delivered the entire full-stack platform for a client mall from database to production',
        'Built booking, utilities management, and vendor service workflows covering all mall operations',
        'Handled both backend (Django/DRF) and frontend (React) development and cloud deployment',
      ],
    },
    {
      title:  'Backend Developer',
      company: 'DevSend — Email Automation Tool',
      period: '2025',
      link:   null,
      items: [
        'Built a secure email scheduling platform on FastAPI integrated with the Resend API',
        'Supports scheduled sends, rich HTML templates, bulk personalization, and multi-key API rotation',
        'Delivery logging, CSV export, admin auth, and real-time search included in the admin interface',
      ],
    },
  ];

  const education = [
    {
      title: 'Bachelor of Science in Information Technology',
      institution: 'Taita Taveta University — BSc in Information Technology',
    },
    {
      title: 'Independent & Online Learning',
      institution: 'Backend Development, Cloud Computing, Modern Web Technologies — Udemy, YouTube, Google Developer Resources',
    },
    {
      title: 'Linux Systems Administration',
      institution: 'Self-taught — 2+ years of hands-on Ubuntu server administration in production environments',
    },
  ];

  const infraItems = [
    'Manage a personal cloud server on Microsoft Azure hosting multiple production-grade Dockerized services',
    'Deploy and maintain applications behind Nginx reverse proxy with SSL, systemd, and automated backups',
    'Operate a custom CI/CD engine (Hookworm) with GitHub webhooks, Telegram alerts, and zero-downtime deploys',
    'Self-host Umami analytics, MinIO file services, and application backends across all live platforms',
    'Handle all server security, system updates, monitoring, and incident response independently',
  ];

  const certItems = [
    { icon: CheckCircle, text: 'Preparing for Microsoft Azure Cloud certification (AZ-900 / AZ-104)' },
    { icon: CheckCircle, text: 'Hands-on experience with ISO 20022 international payment messaging standards' },
    { icon: CheckCircle, text: 'Tazama transaction monitoring integration for AML/CFT regulatory compliance' },
    { icon: CheckCircle, text: 'M-Pesa STK push integration and payment reconciliation for Kenyan markets' },
    { icon: Server,      text: 'Focused on enterprise SaaS, fintech infrastructure, and privacy-first self-hosted systems' },
  ];

  return (
    <div className="page-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <div className="section-eyebrow">
                <Briefcase size={16} />
                <span>Resume</span>
              </div>
              <h1 className="section-heading">Tom Nyambu</h1>
              <p className="section-subheading">
                Full Stack Developer · Cloud Infrastructure · Fintech Integration
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="home-btn home-btn-primary"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="home-btn home-btn-secondary"
                  >
                    <ExternalLink size={18} />
                    <span>Get in Touch</span>
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Core Competencies */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Code size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Core Competencies</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {competencies.map((comp) => (
                    <div key={comp.title}>
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--orange)' }}>{comp.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{comp.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Professional Experience */}
            <AnimatedSection delay={0.3}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Briefcase size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Professional Experience</h2>
                </div>
                <div className="space-y-8">
                  {experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      className={idx > 0 ? 'pt-8 border-t' : ''}
                      style={idx > 0 ? { borderColor: 'var(--line)' } : {}}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1">
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-medium text-sm" style={{ color: 'var(--orange)' }}>{exp.company}</p>
                            {exp.link && (
                              <a href={exp.link} target="_blank" rel="noopener noreferrer"
                                style={{ color: 'var(--gray)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                                <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-medium mt-1 sm:mt-0 whitespace-nowrap" style={{ color: 'var(--gray)' }}>
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.items.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Infrastructure & Cloud */}
            <AnimatedSection delay={0.4}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Server size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Infrastructure & Cloud</h2>
                </div>
                <div className="space-y-3">
                  {infraItems.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.45}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Award size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Education & Training</h2>
                </div>
                <div className="space-y-5">
                  {education.map((edu, idx) => (
                    <div key={idx} className={idx > 0 ? 'pt-5 border-t' : ''} style={idx > 0 ? { borderColor: 'var(--line)' } : {}}>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{edu.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--gray)' }}>{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Certifications & Focus */}
            <AnimatedSection delay={0.5}>
              <div className="glass-card-dark p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Shield size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Certifications & Industry Focus</h2>
                </div>
                <div className="space-y-3">
                  {certItems.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                      <Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Resume;
