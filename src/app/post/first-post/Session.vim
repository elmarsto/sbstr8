let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 ./body.md
badd +1 ./footnotes.md
badd +1 ./hook.md
badd +4 ./teaser.md
badd +1 ./meta.json
argglobal
%argdel
edit ./meta.json
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
4wincmd k
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd w
wincmd w
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 14 + 24) / 49)
exe 'vert 1resize ' . ((&columns * 122 + 123) / 246)
exe '2resize ' . ((&lines * 14 + 24) / 49)
exe 'vert 2resize ' . ((&columns * 123 + 123) / 246)
exe '3resize ' . ((&lines * 8 + 24) / 49)
exe '4resize ' . ((&lines * 2 + 24) / 49)
exe '5resize ' . ((&lines * 10 + 24) / 49)
exe '6resize ' . ((&lines * 9 + 24) / 49)
argglobal
enew
file oil://./
balt ./meta.json
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=20
setlocal nofen
wincmd w
argglobal
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 5 - ((4 * winheight(0) + 7) / 14)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 032|
wincmd w
argglobal
if bufexists(fnamemodify("./teaser.md", ":p")) | buffer ./teaser.md | else | edit ./teaser.md | endif
if &buftype ==# 'terminal'
  silent file ./teaser.md
endif
balt ./meta.json
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 4) / 8)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("./hook.md", ":p")) | buffer ./hook.md | else | edit ./hook.md | endif
if &buftype ==# 'terminal'
  silent file ./hook.md
endif
balt ./meta.json
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 1) / 2)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 022|
wincmd w
argglobal
if bufexists(fnamemodify("./body.md", ":p")) | buffer ./body.md | else | edit ./body.md | endif
if &buftype ==# 'terminal'
  silent file ./body.md
endif
balt ./teaser.md
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 5) / 10)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("./footnotes.md", ":p")) | buffer ./footnotes.md | else | edit ./footnotes.md | endif
if &buftype ==# 'terminal'
  silent file ./footnotes.md
endif
balt ./body.md
setlocal fdm=expr
setlocal fde=MarkdownFold()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 4) / 9)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
6wincmd w
exe '1resize ' . ((&lines * 14 + 24) / 49)
exe 'vert 1resize ' . ((&columns * 122 + 123) / 246)
exe '2resize ' . ((&lines * 14 + 24) / 49)
exe 'vert 2resize ' . ((&columns * 123 + 123) / 246)
exe '3resize ' . ((&lines * 8 + 24) / 49)
exe '4resize ' . ((&lines * 2 + 24) / 49)
exe '5resize ' . ((&lines * 10 + 24) / 49)
exe '6resize ' . ((&lines * 9 + 24) / 49)
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
