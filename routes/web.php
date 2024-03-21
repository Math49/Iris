<?php

use App\Http\Controllers\ForumController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{id}', [BlogController::class, 'show'])->name('blog.show');

Route::get('/donnation', function () {
    return Inertia::render('Donnation');
})->name('donnation');

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/newsletter', function () {
    return Inertia::render('Newsletter');
})->name('newsletter');

Route::get('/devenir-benevole', function () {
    return Inertia::render('Benevole');
})->name('benevole');

Route::get('/profil', function () {
    return Inertia::render('Profile');
})->name('profile');

Route::middleware('auth')->group(function () {

    Route::get('/admin/dashboard/users', [ProfileController::class, 'index'])->name('users.index');
    Route::post('/admin/dashboard/users/{user}/role', [ProfileController::class, 'updateRole'])->name('users.updateRole');
    Route::delete('/admin/dashboard/users/{id}', [ProfileController::class, 'destroyUser'])->name('user.destroy');

    Route::get('/forum', [ForumController::class, 'index'])->name('forum.index');
    Route::get('/forum/{id}', [ForumController::class, 'showPost'])->name('forum.showPost');
    Route::post('/comment/{id}', [ForumController::class, 'comment'])->name('forum.comment');
    Route::post('/forum/create', [ForumController::class, 'create'])->name('forum.createPost');
    
    Route::get('/admin/dashboard/posts', [ForumController::class, 'posts'])->name('posts.index');
    Route::delete('/admin/dashboard/posts/{id}', [ForumController::class, 'destroyPost'])->name('posts.destroy');
    
    Route::get('/blog/create', [BlogController::class, 'addBlog'])->name('blog.add');
    Route::post('/blog/create', [BlogController::class, 'create'])->name('blog.create');
    Route::get('/dashboard/blog', [BlogController::class, 'dashboard'])->name('blog.dashboard');
    Route::delete('/dashboard/blog/{id}', [BlogController::class, 'destroy'])->name('blog.destroy');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
