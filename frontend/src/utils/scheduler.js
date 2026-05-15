export const DAYS=['Dushanba','Seshanba','Chorshanba','Payshanba','Juma'];
export const PAIRS=['08:00–09:30','09:45–11:15','11:30–13:00','13:45–15:15','15:30–17:00','17:15–18:45'];
export const lessonTypeLabel={lecture:'Ma’ruza',practice:'Amaliy',lab:'Laboratoriya',seminar:'Seminar'};
export const lessonTypeStyle={lecture:'border-blue-400 bg-blue-50 text-blue-900',practice:'border-amber-400 bg-amber-50 text-amber-900',lab:'border-emerald-400 bg-emerald-50 text-emerald-900',seminar:'border-violet-400 bg-violet-50 text-violet-900'};
export const findBy=(arr,id)=>arr.find(x=>x.id===id);
export function teacherHours(teacherId,lessons){return lessons.filter(l=>l.teacherId===teacherId).reduce((s,l)=>s+Number(l.hours||2),0);}
export function detectConflicts(lessons){
 const conflicts=[];
 for(let i=0;i<lessons.length;i++) for(let j=i+1;j<lessons.length;j++){
  const a=lessons[i],b=lessons[j];
  if(a.day!==b.day||a.pair!==b.pair) continue;
  if(a.teacherId&&a.teacherId===b.teacherId) conflicts.push({type:'teacher',message:'O‘qituvchi bir vaqtning o‘zida ikki darsga qo‘yilgan',a,b});
  if(a.roomId&&a.roomId===b.roomId) conflicts.push({type:'room',message:'Xona bir vaqtning o‘zida ikki darsga band',a,b});
  if(a.groupId&&a.groupId===b.groupId) conflicts.push({type:'group',message:'Guruh bir vaqtning o‘zida ikki darsga qo‘yilgan',a,b});
 }
 return conflicts;
}
export function optimizeSuggestion({teachers,lessons}){
 const overloaded=teachers.map(t=>({teacher:t,hours:teacherHours(t.id,lessons),max:Number(t.maxHours||18)})).filter(x=>x.hours>x.max);
 return {overloaded, score: Math.max(0,100-overloaded.length*15-detectConflicts(lessons).length*10)};
}
