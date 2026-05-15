import { Router } from 'express';
const router=Router();
function teacherHours(id,lessons){return lessons.filter(l=>l.teacherId===id).reduce((s,l)=>s+Number(l.hours||2),0)}
router.post('/analyze',(req,res)=>{const {teachers=[],lessons=[]}=req.body;const overloaded=teachers.map(t=>({id:t.id,name:t.name,hours:teacherHours(t.id,lessons),max:Number(t.maxHours||18)})).filter(x=>x.hours>x.max);res.json({overloaded, score: Math.max(0,100-overloaded.length*15)});});
router.post('/ai-helper',(req,res)=>{const {message=''}=req.body;res.json({answer:`AI yordamchi: "${message}" bo‘yicha jadvalda avval o‘qituvchi, xona va guruh konfliktlarini tekshiring. Yuklama oshgan bo‘lsa darslarni boshqa o‘qituvchiga yoki bo‘sh vaqtga ko‘chiring.`});});
export default router;
